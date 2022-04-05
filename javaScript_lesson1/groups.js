    function maxItemAssociation(arr){
      
        if (arr){

          let groups = new Set();
          for (let itemArray of arr){

            if (groups.size == 0) {
              groups.add(new Set(itemArray));

            } else {

              for (let itemSet of groups){
                let addArray = false; 
                for (let itemGroups of itemSet){
                  if (itemArray.includes(itemGroups)){
                    itemArray.forEach(a => itemSet.add(a));
                    addArray = true;
                  }
                }
                if (!addArray) groups.add(new Set(itemArray));
              }
            }
          }

        for (let itemSet of groups) alert(Array.from(itemSet).sort());
        }
    }