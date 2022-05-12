using Entities.PersonItems;
using Logic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;

namespace API.Controllers
{
    //[EnableCors("EnableLocalPort4200")]
    [ApiController]
    [Route("[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly ILogger<ClientsController> _logger;

        public ClientsController(ILogger<ClientsController> logger)
        {
            _logger = logger;
        }

        ClientsLogic clientsLogic = new ClientsLogic();

        [Route("/clients/add")]
        [HttpPost]
        public ActionResult Add(ClientItem clientItem)
        {
            clientItem.PersonID = 0;
            clientItem.ClientID = 0;
            clientItem.InsertDate = DateTime.Now;
            try
            {
                return Ok(clientsLogic.AddClient(clientItem).ToString());
            }
            catch
            {
                return BadRequest("There was an error while inserting cli");
            }

        }
        [Route("/clients/update")]
        [HttpPatch]
        public long UpdateClient(ClientItem clientItem)
        {
            try
            {
                clientsLogic.UpdateClient(clientItem);
                return 200;
            }
            catch
            {
                return 400;
            }

        }
        [Route("/clients/readAll")]
        [HttpGet]
        public List<ClientItem> ReadClients()
        {
            List<ClientItem> clientsList = clientsLogic.ReadClients().ToList();
            return clientsList;
        }
        [Route("/clients/readByParams")]
        [HttpGet]
        public List<ClientItem> ReadClientsByParameters([FromQuery] ClientSearchParams clientInfo)
        {
            List<ClientItem> clientsList = clientsLogic.ReadClientsByParameters(clientInfo).ToList();
            return clientsList;
        }
    }
}
