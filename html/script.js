// global session
var session = new QiSession(function(session) {
                // document.getElementById('typed').innerHTML = "Connection esterblished!";
              }, function() {
                // document.getElementById('typed').innerHTML = "Could not connect to the robot";
              });


// Subscribe to ALMemory Service
session.service("ALMemory").then(function(ALMemory) {
  // document.getElementById('typed').innerHTML = "ALMemory proxy subscription successful!";
  ALMemory.getData('name_recog_list').then(function(name_recog_list){

    var x = name_recog_list;
    // number of mail in the list
    var len_list_name = x.length;

    var img_database = [["Jaakko","porokuokka.jpg"], ["Linh","linh.jpg"]];

   for (var i = 0; i < len_list_name ; i++)
	{
  		var div1 = document.createElement("div");
      		div1.className = "responsive";

  		var div2 = document.createElement("div");
      		div2.className = "gallery";

      var div3 = document.createElement("div");
      div3.className = "name";
      div3.innerHTML = String(x[i]);

   		var img = document.createElement("img");
      var i;
        for (i = 0; i < img_database.length; i++) {
            if (img_database[i][0] == String(x[i])) {
              		img.src = img_database[i][1];
                  break;
            } else { continue; }
        }

      div2.appendChild(img);
  		div2.appendChild(div3);
  		div1.appendChild(div2);
  		document.body.appendChild(div1);
	}
  });

});
