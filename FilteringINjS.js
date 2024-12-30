//Filtering in JavaScript...

<script>

const obbject = [
    {id:110,
        text:'File Handling',
        profile:true
    },
    {
        id:210,
        text:'Programming',
        profile:false
    },
    {
        id:330,
        text:'JavaScript',
        profile:true
    }
];
const obbjectFile = obbject.filter(function(obbject){
    return obbject.profile === true;
});
console.log(obbjectFile);




    </script>