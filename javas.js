JAVA SCRIPT
function set_num(n)
{
 var t1='';
 if(document.getElementById("opr").value=='')
 {
 if(document.getElementById("text1").value!='')
 {
 t1=document.getElementById("text1").value;
 }
 var num=t1+n;
 document.getElementById("text1").value=num;
 }
 else
 {
 if(document.getElementById("text2").value!='')
 {
 t1=document.getElementById("text2").value;
 }
 var num=t1+n;
 document.getElementById("text2").value=num;
 }
}
function operation(s)
{
 document.getElementById("opr").value=s;
}
function cal()
{
 n1=parseInt(document.getElementById("text1").value);
 n2=parseInt(document.getElementById("text2").value);
 opr=document.getElementById("opr").value;
 switch(opr)
 {
 case '+':
 res=n1+n2;
 break;
 case '-':
 res=n1-n2;
 break;
 case '/':
 res=n1/n2;
 break;
 case '*':
 res=n1*n2;
 break;
 case '%':
 res=n1%n2;
 break;
 case 'SQRT':
 res=Math.sqrt(n1);
 break;
 case 'sq':
 res=n1*n1;
 break;
 case 'cube':
 res=n1*n1*n1;
 break;
 }
 document.getElementById("res").value=res;
}
function cl()
{
 document.getElementById("text1").value='';
 document.getElementById("text2").value='';
 document.getElementById("res").value='';
 document.getElementById("opr").value='';
}

