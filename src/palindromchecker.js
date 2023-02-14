import React, { useState } from 'react';
import 'bulma/css/bulma.css'; // import the Bulma CSS styles

function PalindromeChecker() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append('word', word);
    fetch('http://localhost:8000/checker/process_word/', {
      method: 'POST',
      body: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((data) => setResult(data));
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Palindrome Checker</h1>
        <form onSubmit={handleSubmit}>
          <div className="field is-grouped">
            <div className="control">
              <input className="input" type="text" name="word" value={word} onChange={(e) => setWord(e.target.value)} />
            </div>
            <div className="control">
              <button className="button is-primary" type="submit">Check</button>
            </div>
          </div>
        </form>
        {result.is_palindrome !== undefined && (
          <div>
            {result.is_palindrome ? <p className="has-text-success">The word is a palindrome</p> : <p className="has-text-danger">The word is not a palindrome</p>}
            {result.middle_letter && <p>The middle letter is {result.middle_letter}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default PalindromeChecker;
