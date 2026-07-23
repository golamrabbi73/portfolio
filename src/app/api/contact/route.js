import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(request) {


try {


const body = await request.json();


const {
name,
email,
subject,
message
}=body;



if(
!name ||
!email ||
!subject ||
!message
){

return Response.json(
{
success:false,
message:"All fields are required"
},
{
status:400
}
);

}




await resend.emails.send({

from:
"Portfolio Contact <onboarding@resend.dev>",


to:
["golamrabbi73hr@gmail.com"],


replyTo:
email,


subject:
`Portfolio Contact: ${subject}`,


html:

`
<div style="font-family:Arial">

<h2>New Portfolio Message</h2>

<p>
<strong>Name:</strong>
${name}
</p>


<p>
<strong>Email:</strong>
${email}
</p>


<p>
<strong>Subject:</strong>
${subject}
</p>


<hr/>


<p>
${message}
</p>


</div>
`

});




return Response.json({

success:true,

message:"Message sent successfully"

});



}

catch(error){


console.error(error);


return Response.json({

success:false,

message:"Failed to send message"

},
{
status:500
}
);


}


}