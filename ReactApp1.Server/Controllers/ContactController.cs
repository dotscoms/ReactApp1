using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        [HttpPost("send")]
        public IActionResult Send([FromBody] ContactModel model)
        {
            try
            {
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new NetworkCredential(
                    "kishanpatel190903@gmail.com",
                    "ypsnjdfbgcabotcy"
                );
                smtp.EnableSsl = true;

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("kishanpatel190903@gmail.com");
                mail.To.Add("sejalchauhan632@gmail.com ");
                mail.Subject = "React Contact Form";
                mail.Body = $@"
Name: {model.FirstName} {model.LastName}
Email: {model.Email}
Phone: {model.Phone}
Address: {model.Address}
Message: {model.Message}
";

                smtp.Send(mail);

                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }

    public class ContactModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
    }
}
