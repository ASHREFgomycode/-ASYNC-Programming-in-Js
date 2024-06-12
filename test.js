//1st one   chainedAsyncFunctions();


async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async Function 1 executed");
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async Function 2 executed");
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async Function 3 executed");
  }
  
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  

  


//   2nd one  concurrentRequests();

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([
        fetchData('https://api.example.com/data1'),
        fetchData('https://api.example.com/data2')
      ]);
      
      console.log('Combined results:', result1, result2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

 
 
 
 
  //3rd one 
 
  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  
  async function parallelCalls(urls) {
    try {
      const promises = urls.map(url => fetchData(url));
      const responses = await Promise.all(promises);
      
      console.log('Responses:', responses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage
  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ];
  
  parallelCalls(urls);
  