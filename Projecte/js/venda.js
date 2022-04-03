
    var myCookie = document.cookie;
    var spito = myCookie.split('=');
    var useruid = spito[1];
    console.log (useruid)

      /*Variables*/
      var ImageName,ImageUrl;
      var files;
      var reader= new FileReader();
     /*Proces de seleccio*/


     document.getElementById("select").onclick = function(e){
            var input = document.createElement('input');
            input.type= 'file';
        
            input.onchange = e => {
                files = e.target.files;
                reader = new FileReader();
                reader.onload = function(){
                    document.getElementById("myimg").src = reader.result;
                }
                reader.readAsDataURL(files[0]);
            }
            input.click();
     }

     /*pujar imatge*/

    /*puja la imatge al storage*/
     document.getElementById('upload').onclick = function(){
         ImgName = document.getElementById('namebox').value;
         var uploadTask = firebase.storage().ref('Images/'+ImgName+".png").put(files[0]);

         uploadTask.on('state_changed',function(snapshot){
             var progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
             document.getElementById('UpProgress').innerHTML = ' Publicant '+ progress+' %';
         },

    /*error pujada*/
         function(error){
             alert('error al guardar la imatge');
         },
   /*envia enllac de imatge a la base de dades*/
         function(){
          uploadTask.snapshot.ref.getDownloadURL().then(function(url){
             ImageUrl = url;
          

          firebase.datebase().ref('Pictues/'+ImgName).set({
            Nom: ImgName,
            URL: ImageUrl
          });
            alert('La imagen se ha guardado correctamente');

         }
         );
      });
    }

/*Recuperar*/

        document.getElementById('retrieve').onclick = function(){
           ImageName = document.getElementById('namebox').value;
           firebase.datebase().ref('Pictues/'+ImgName).on('value',function(snapshot){
           document.getElementById('myimg').src = snapshot.val().Link;

           });
        }