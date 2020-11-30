function sortByFirstName(props)

 const {firstNames} = props;

 let firstNames = res.data.results.name.first;
 
 sortedNames.sort((a, b) => {
     if(a.name < b.name) {
         return -1;
     }
     if (a.name > b.name) {
         return 1;
     }
     return 0;
 });

 export default sortByFirstName