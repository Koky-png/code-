function 
checkSpeed(speed) {
     const speedLimit = 70;
      const kmPerDemerit = 5;
       // if stament that prints okay if speed is less if (speed <= speedLimit) 
       { 
        console.log("Ok");
     }
     { 
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit); console.log(`Demerit points:
            {
                demeritPoints}`); if (demeritPoints >= 12) { 
                console.log("License suspended"); 

             } 
            } 
        }
         checkSpeed(80)
          checkSpeed(60)
           checkSpeed(135)

 