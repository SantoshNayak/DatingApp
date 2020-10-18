using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }


        [HttpGet("auth")]
        public ActionResult<string> GetSecreat()
        {

            return "secreat code here";
        }


        [HttpGet("not-found")]
        public ActionResult<string> GetNotFound()
        {
            // we are trying to find user with id -1 which doesn't exist and returning not found
            var things = _context.Users.Find(-1);
            if (things == null) return NotFound();
            return Ok(things);
        }


        [HttpGet("server-error")]
        public ActionResult<AppUser> GetServerError()
        {
            // we are trying to find user with id -1 which doesn't exist 
            var things = _context.Users.Find(-1);
            var thingToReturn = things.ToString();
            return Ok(thingToReturn);
        }


        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {

            return BadRequest("This is not a good request");
            //test
        }
      
    }
}