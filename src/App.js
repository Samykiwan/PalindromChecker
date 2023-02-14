import React from 'react';
import 'bulma/css/bulma.css';
import PalindromeChecker from './palindromchecker';

function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Palindrome Checker</h1>
        <p className="subtitle">The Palindrome Checker app allows users to easily check if a word is a palindrome or not. To use the app, simply type in a word into the text box and click the submit button. The app will then return the result, indicating whether the word is a palindrome or not. A palindrome is a word that reads the same backwards as forwards, such as "racecar" or "level". So, with this app, you can quickly and easily determine if a word is a palindrome or not.</p>
        <hr />
        <PalindromeChecker />
      </div>
    </div>
  );
}

export default App;
