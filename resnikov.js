if (document.images)
{
  pic1= new Image(90,30); 
  pic1.src="http://www.rezni.com/images/button_about.png";
  
  pic2= new Image(90,30); 
  pic2.src="http://www.rezni.com/images/button_about_over.png"; 
  
  pic3= new Image(230,42); 
  pic3.src="http://www.rezni.com/images/button_adv.png"; 
  
  pic4= new Image(230,42); 
  pic4.src="http://www.rezni.com/images/button_adv_over.png"; 
  
  pic5= new Image(230,42); 
  pic5.src="http://www.rezni.com/images/button_contact.png"; 
  
  pic6= new Image(230,42); 
  pic6.src="http://www.rezni.com/images/button_contact_over.png"; 
  
  pic7= new Image(90,42); 
  pic7.src="http://www.rezni.com/images/button_form.png"; 
  
  pic8= new Image(90,42); 
  pic8.src="http://www.rezni.com/images/button_form_over.png"; 
  
  pic9= new Image(90,30); 
  pic9.src="http://www.rezni.com/images/button_heb.png"; 
  
  pic10= new Image(90,30); 
  pic10.src="http://www.rezni.com/images/button_heb_over.png"; 
  
  pic11= new Image(50,30); 
  pic11.src="http://www.rezni.com/images/button_home.png"; 
  
  pic12= new Image(50,30); 
  pic12.src="http://www.rezni.com/images/button_home_over.png";   
  
  pic13= new Image(160,149); 
  pic13.src="http://www.rezni.com/images/resnikov_logo.png";
  
   pic14= new Image(160,149); 
  pic14.src="http://www.rezni.com/images/resnikov_logo1.png";
}




function show(id)
{
	var d = document.getElementById(id);
	d.style.display = 'block';
}

function hide(id)
{
	var d = document.getElementById(id);
	d.style.display = 'none';
}

function show_fadein(id)
{
	show(id);
	fadeIn(id);	
}


//------------------Opacity Change------------------//

var opacity  = 0;
var interval = "";

function fadeIn(id)
{            
    setOpacity(id, 0);
    interval = window.setInterval( function() { opacityUp(id) }, 20);
    opacity = 0;
}

function opacityUp(id)
{
    if (opacity < 100) 
    {
        opacity += 10;
        setOpacity(id, opacity);
    }
    else  stop_Int(); 
    
}




function setOpacity(id, opacity) 
{ 
    opacity = (opacity == 100)?99.999:opacity; 
    document.getElementById(id).style.filter = "alpha(opacity:"+opacity+")"; 
    document.getElementById(id).style.KHTMLOpacity = opacity/100; 
    document.getElementById(id).style.MozOpacity = opacity/100; 
    document.getElementById(id).style.opacity = opacity/100; 
}

function stop_Int()
{
    window.clearInterval(interval); 
    interval = "";
}


//------------------Russian keyboard------------------//

var shift_on = false;

function init()
{
	var normals = "Ñ‘1234567890<Ð¹Ñ†ÑƒÐºÐµÐ½Ð³ÑˆÑ‰Ð·Ñ…ÑŠÑ„Ñ‹Ð²Ð°Ð¿Ñ€Ð¾Ð»Ð´Ð¶ÑÑÑ‡ÑÐ¼Ð¸Ñ‚ÑŒÐ±ÑŽ.";
	var caps = "Ð!\"#$%^&*()<Ð™Ð¦Ð£ÐšÐ•ÐÐ“Ð¨Ð©Ð—Ð¥ÐªÐ¤Ð«Ð’ÐÐŸÐ ÐžÐ›Ð”Ð–Ð­Ð¯Ð§Ð¡ÐœÐ˜Ð¢Ð¬Ð‘Ð®,";
	
	var inputs_arr = document.getElementsByTagName('input');	
	
	for (var i=0, j=0; i<inputs_arr.length; i++)
	{		
		if (inputs_arr[i].className == 'key')	
		{
			if (shift_on == true)
			{
				inputs_arr[i].value = caps.charAt(j);
			}
			else
			{
				inputs_arr[i].value = normals.charAt(j);
			}
			j++;
		}
	}	
}

function add_char(id)
{
	var source =  document.getElementById(id);	
	var target = document.getElementById('russkey_input');
	if (id == 'space')
	{	
		target.value = target.value + " ";	
	}
	else if (shift_on == true) 	
	{						
		target.value = target.value + source.value;
		shift_on = false;
		init();
	}
	else
	{
		target.value = target.value + source.value;	
	}
	
	
}

function remove_last_char()
{
	var target = document.getElementById('russkey_input');
	var curr_str = target.value;
	var new_str = curr_str.substring(0,(curr_str.length - 1));
	target.value = new_str;
}

function shift_all()
{
	shift_on = true;
	init();
}

function copy_txt(id)
{
	var source = document.getElementById('russkey_input');
	var target =  document.getElementById(id);
	if (target.value != "")
	{
		target.value = target.value + " " + source.value;
	}
	else
	{
		target.value = target.value + source.value;
	}
}

function clear_input()
{
	var target = document.getElementById('russkey_input');
	target.value = "";
}

//------------------Form URL------------------//

function get_url()
{	
	if (!document.getElementById('page'))
	{
		return;
	}

	var page_url = window.location.pathname;
	var arr1 = page_url.split('/');
	page_url = arr1[arr1.length - 1];	
	document.getElementById('page').value = page_url;	
}

//------------------Include menu current------------------//

function get_line()
{
	var leftmenu = document.getElementById('leftmenu_list');
	var lines_a = leftmenu.getElementsByTagName('a');		
	for (var i=0; i<lines_a.length; i++)
	{
		if (window.location == lines_a[i].getAttribute('href'))
		{
			lines_a[i].parentNode.className = 'current';
		}		
	}	
	
}

/*function get_page_url()
{	
	var page_url = window.location.pathname;
	var arr = page_url.split('/');
	page_url = arr[arr.length - 1];
	arr = page_url.split('.');
	page_url = arr[0];
	alert(page_url);		
}*/