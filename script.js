// http://api.weatherstack.com/current
// ? access_key = 8ff3c63a0c277bbbe88a48074f42870a
// & query = New York

fetch('http://api.weatherstack.com/current')
.then(response => response.json())
.then(data => {

    })

  console.log(data)
