var TOCpro=i=headlength=gethead=0;for(document.getElementById("toc-pro").innerHTML="<div class='toc' on='tap:toc-contents.toggleVisibility' role='button' tabindex='0'>Contents<svg height='18' viewbox='0 0 24 24' width='18'><path d='M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' fill='#000000'></path></svg><div id='toc-contents'></div></div>",headlength=document.getElementById("toc-post").querySelectorAll("h2, h3, h4, h5").length,i=0;i<headlength;i++)gethead=document.getElementById("toc-post").querySelectorAll("h2, h3, h4, h5")[i].textContent,document.getElementById("toc-post").querySelectorAll("h2, h3, h4, h5")[i].setAttribute("id","point"+i),TOCpro="<li><a href='#point"+i+"'>"+gethead+"</a></li>",document.getElementById("toc-contents").innerHTML+=TOCpro;
