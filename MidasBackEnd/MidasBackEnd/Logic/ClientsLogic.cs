using Data;
using Entities.PersonItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Logic
{
    public class ClientsLogic
    {
        public bool ValidateClientInfo(ClientItem client, bool isNewPerson, bool isNewClient)
        {
            var peopleLogic = new PeopleLogic();
            if(!peopleLogic.ValidatePersonInfo(client, isNewPerson))
            {
                return false;
            }
            if(!isNewClient && client.ClientID < 1)
            {
                return false;
            }
            return true;
        }
        public long AddClient(ClientItem client)
        {
            if (!ValidateClientInfo(client, true, true))
            {
                throw new InvalidClientInfo("Falta información requerida del cliente.");
            }
            var context = new MidasContext();
            try
            {
                context.Clients.Add(client);
                context.SaveChanges();
                return client.ClientID;
            }
            catch
            {
                throw new InsertClientError("Error en DB al insertar cliente.");
            }
        }
        public void UpdateClient(ClientItem client)
        {
            if (!ValidateClientInfo(client, false, false))
            {
                throw new InvalidClientInfo("Falta información requerida del cliente.");
            }
            try
            {
                var context = new MidasContext();
                var clientToUpdate = context.Clients.Find(client.ClientID);
                clientToUpdate = client;
                context.SaveChanges();
            }
            catch
            {
                throw new UpdateClientError("Error en DB al modificar cliente.");
            }
            
        }
        public List<ClientItem> ReadClients()
        {
            var context = new MidasContext();
            return context.Clients.ToList();
        }
        public List<ClientItem> ReadClientsByParameters(ClientSearchParams clientInfo)
        {
            var context = new MidasContext();
            var clientsList = new List<ClientItem>();
            var listLoaded = false;

            if (clientInfo.PersonID > 0)
            {
                clientsList = context.Clients.Where(client => client.PersonID == clientInfo.PersonID).ToList();
                listLoaded = true;
            }
            if(clientInfo.DNI > 0){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.DNI == clientInfo.DNI).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.DNI == clientInfo.DNI).ToList();
                    listLoaded = true;
                }
            }
            if(clientInfo.FirstNames != ""){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.FirstNames == clientInfo.FirstNames).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.FirstNames == clientInfo.FirstNames).ToList();
                    listLoaded = true;
                }
            }
            if(clientInfo.SurNames != ""){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.SurNames == clientInfo.SurNames).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.SurNames == clientInfo.SurNames).ToList();
                    listLoaded = true;
                }
            }
            if(clientInfo.BirthDate != default(DateTime)){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.BirthDate == clientInfo.BirthDate).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.BirthDate == clientInfo.BirthDate).ToList();
                    listLoaded = true;
                }
            }
            if(clientInfo.PhoneNumber != ""){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.PhoneNumber == clientInfo.PhoneNumber).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.PhoneNumber == clientInfo.PhoneNumber).ToList();
                    listLoaded = true;
                }
            }
            if(clientInfo.Email != ""){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.Email == clientInfo.Email).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.Email == clientInfo.Email).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.InsertDate != default(DateTime))
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.InsertDate == clientInfo.InsertDate).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.InsertDate == clientInfo.InsertDate).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.Active != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.Active == clientInfo.Active).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.Active == clientInfo.Active).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.GenderID > 0)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.GenderID == clientInfo.GenderID).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.GenderID == clientInfo.GenderID).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.PreferedContactTypeID > 0){
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.PreferedContactTypeID == clientInfo.PreferedContactTypeID).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.PreferedContactTypeID == clientInfo.PreferedContactTypeID).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.BirthDateFrom != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.BirthDate >= clientInfo.BirthDateFrom).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.BirthDate >= clientInfo.BirthDateFrom).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.BirthDateTo != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.BirthDate <= clientInfo.BirthDateTo).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.BirthDate <= clientInfo.BirthDateTo).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.InsertDateFrom != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.InsertDate >= clientInfo.InsertDateFrom).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.InsertDate >= clientInfo.InsertDateFrom).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.InsertDateTo != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.InsertDate <= clientInfo.InsertDateTo).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.InsertDate <= clientInfo.InsertDateTo).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.FinancialBalanceFrom != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.FinancialBalance >= clientInfo.FinancialBalanceFrom).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.FinancialBalance >= clientInfo.FinancialBalanceFrom).ToList();
                    listLoaded = true;
                }
            }
            if (clientInfo.FinancialBalanceTo != null)
            {
                if (listLoaded)
                {
                    clientsList = clientsList.Where(client => client.FinancialBalance <= clientInfo.FinancialBalanceTo).ToList();
                }
                else
                {
                    clientsList = context.Clients.Where(client => client.FinancialBalance <= clientInfo.FinancialBalanceTo).ToList();
                    listLoaded = true;
                }
            }

            return clientsList;
        }
    }
    //public class ClientSearchParams : ClientItem
    //{
    //    public DateTime? BirthDateFrom { get; set; }
    //    public DateTime? BirthDateTo { get; set; }
    //    public DateTime? InsertDateFrom { get; set; }
    //    public DateTime? InsertDateTo { get; set; }
    //    public decimal? FinancialBalanceFrom { get; set; }
    //    public decimal? FinancialBalanceTo { get; set; }
    //}
    //[BindProperties]
    public class ClientSearchParams
    {
        public long? PersonID { get; set; }
        public long? ClientID { get; set; }
        public long? DNI { get; set; }
        public string FirstNames { get; set; }
        public string SurNames { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public long? GenderID { get; set; }
        public long? PreferedContactTypeID { get; set; }
        public DateTime? InsertDate { get; set; }
        public DateTime? BirthDateFrom { get; set; }
        public DateTime? BirthDateTo { get; set; }
        public DateTime? InsertDateFrom { get; set; }
        public DateTime? InsertDateTo { get; set; }
        public decimal? FinancialBalanceFrom { get; set; }
        public decimal? FinancialBalanceTo { get; set; }
        public bool? Active { get; set; }
    }
}
