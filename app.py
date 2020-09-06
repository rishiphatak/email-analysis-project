import streamlit as st
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.preprocessing import LabelEncoder

from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

import plotly.express as px

def main():

    st.title("Email Analysis Dashboard ✉")

    def get_sample():
        df = pd.read_csv('data/test.txt', sep=';', header=None)
        df = df.sample(n=10)
        return df[0].values.T
    sample_email = get_sample()

    st.subheader('Email analyzed:')
    st.write('. '.join(sample_email))

    vocab_size = 10000
    embedding_dim = 16
    max_length = 120
    trunc_type='post'
    oov_tok = "<OOV>"

    @st.cache(persist=True)
    def get_enc_tok():
        train_df = pd.read_csv('data/train.txt', sep=';', header=None)
        train_sentences = train_df[0].values.T
        train_labels = train_df[1].values.T
        encoder = LabelEncoder()
        training_labels_final = encoder.fit_transform(train_labels)

        tokenizer = Tokenizer(num_words = vocab_size, oov_token=oov_tok)
        tokenizer.fit_on_texts(train_sentences)
        
        return encoder, tokenizer
    
    def get_model():
        return tf.keras.models.load_model('emotions-classification-new')

    encoder, tokenizer = get_enc_tok()
    model = get_model()

    input_seq = tokenizer.texts_to_sequences(sample_email)
    input_padded = pad_sequences(input_seq, maxlen=max_length)
    
    emotions = pd.DataFrame(encoder.inverse_transform(np.argmax(model.predict(input_padded), axis=1)))

    st.sidebar.markdown('### Types of emotions:')
    histpie = st.sidebar.multiselect('Select chart type', ('Histogram', 'Pie Chart'))
    if st.sidebar.checkbox('Show', False, key='px'):
        st.subheader('Emotions in email chart:')
        if 'Histogram' in histpie:
            fig = px.histogram(emotions, x=0)
            st.plotly_chart(fig)
        if 'Pie Chart' in histpie:
            fig = px.pie(emotions, names=0)
            st.plotly_chart(fig)

    st.sidebar.markdown('### WordCloud:')
    if st.sidebar.checkbox('Show', False, key='wordcloud'):
        st.subheader('Email WordCloud')
        processed_words = ' '.join(sample_email)
        wordcloud = WordCloud(stopwords=STOPWORDS, background_color='white', width=800, height=640).generate(processed_words)
        plt.imshow(wordcloud)
        plt.xticks([])
        plt.yticks([])
        st.pyplot()

if __name__ == '__main__':
    main()