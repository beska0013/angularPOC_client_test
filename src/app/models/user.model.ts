import{UUID} from 'angular2-uuid';



export class User {
  private readonly user_id: string | undefined;
  private readonly org_id: string | undefined;
  private readonly first_name: string | undefined;
  private readonly last_name: string | undefined;
  private readonly date_of_birth: Date | undefined;
  private readonly gender: string | undefined;
  private readonly email: string | undefined;
  private readonly email_submition: boolean | undefined;
  private readonly valid_cc: number | undefined;
  private readonly cc_submition: boolean | undefined;
  private readonly access_lvl: number | undefined;
  private readonly role: string | undefined;

   constructor(first_name:string,last_name:string,user_name:string,date_of_birth:Date,email:string,gender:string) {
       this.user_id =`${user_name}-${UUID.UUID()}`;
       this.first_name = first_name;
       this.last_name = last_name;
       this.date_of_birth = date_of_birth;
       this.email = email;
       this.gender = gender;
       this.email_submition = false;
       this.valid_cc =  undefined;
       this.access_lvl = undefined;
       this.role = 'user';
   }

  get (option:string){
   if(option === 'name') return `first_name: ${this.first_name}` +'\n'+ `last_name: ${this.last_name}`;
   if(option === 'id') return `user_id :${this.user_id}` + '\n'+ `org_id: ${this.org_id}`;
   if(option === 'date of birth') return `date_of_birth: ${this.date_of_birth}`;
   if(option === 'gender') return `gender: ${this.gender}`;
   if(option === 'email') return `email: ${this.email}` + '\n' + `email_submition: ${this.email_submition}`;
   if(option === 'credit card') return `valid_cc: ${this.valid_cc}` + '\n' + `cc_submition: ${this.cc_submition}`;
   if(option === 'access level') return `access_lvl: ${this.access_lvl}`;
   if(option === 'role') return `role: ${this.role}`;

   return 'No option provided' +'\n'+
     ' Available options:' +'\n'+
     'name,' +'\n'+
     'id,' +'\n'+
     'date of birth,' +'\n'+
     'gender,'+'\n'+
     'email,'+'\n'+
     'credit card,'+'\n'+
     'access level'+'\n'+
     'role'
  }

}
