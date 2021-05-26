var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://www.example.com/api/get/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
