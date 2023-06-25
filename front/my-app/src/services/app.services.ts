export class AppService {

    public async GetTicket(): Promise<string> {
        const response = await fetch('/parking/enter');
        return await response.json();
    }

    public async ReturnTicket(id: number) : Promise<boolean>{
        const response = await fetch('/parking/exit/'+ id);    
        return await response.json();    
    }
}
