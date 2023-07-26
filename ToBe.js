let expect = function(val) {
    return{
        tobe: (val2)=>{
          if(val === val2) return true;
              throw new Error('Não é igual')
      
      }, 
      
      nottobe: (val2)=>{
          if(val !== val2) return true;          
           throw new Error('É igual')
          
        
      } 
  }
  }
  console.log(expect(5).tobe(5));
  console.log(expect(5).nottobe(10));
  