
export class Member {
    id: string;
    title: string;
    name: string;
    gender: string;
    nationality: string;
    birth_date: Date;
    current_age: Number;
    death_date: Date;
    street_name: string;
    door_number: string;
    flat: string;
    postal_code: string;
    city: string;
    contact1: string;
    contact2: string;
    email: string;
    baptism_date: Date;
    communion_date: Date;
    confirmation_date: Date;
    marital_status: string;
    partner_id: string;
    partner_name: string;
    occupation: string;
    professional_qualifications: string;
    father_id: string;
    father_name: string;
    mother_id: string;
    mother_name: string;

    public static map(data: any): Member[] {

        return data.map((member: any) => {

            var partner: Member = data.find(m => m.member_id == member.partner_id);
            var partner_name_aux = partner ? partner.name : null;

            var father: Member = data.find(m => m.member_id == member.father_id);
            var father_name_aux = father ? father.name : null;

            var mother: Member = data.find(m => m.member_id == member.mother_id);
            var mother_name_aux = mother ? mother.name : null;

            var timeDiff = Math.abs(Date.now() - (new Date(member.birth_date)).getTime());
            var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

            var nationality = null;
            switch(member.nationality) {
                case "1":nationality = "Portuguesa"; break;
                case "2":nationality = "Brasileira"; break;
                case "3":nationality = "Americana"; break;
                case "4":nationality = "Espanhola"; break;
                case "5":nationality = "Inglesa"; break;
                case "6":nationality = "Francesa"; break;
                case "7":nationality = "Alemã"; break;
                case "8":nationality = "Japonesa"; break;
                case "9":nationality = "Chinesa"; break;
                case "10":nationality = "Angolana"; break;
                default:nationality = "Portuguesa"; break;
            }

            return {
                id: member.member_id,
                title: member.title,
                name: member.name,
                gender: member.gender,
                nationality: member.nationality,
                nationality_description: nationality,
                birth_date: new Date(member.birth_date),
                current_age: age,
                death_date: member.death_date,
                street_name: member.street_name,
                door_number: member.door_number,
                flat: member.flat,
                postal_code: member.postal_code,
                city: member.city,
                contact1: member.contact1,
                contact2: member.contact2,
                email: member.email,
                baptism_date: member.baptism_date,
                communion_date: member.communion_date,
                confirmation_date: member.confirmation_date,
                marital_status: member.marital_status,
                partner_id: member.partner_id,
                partner_name: partner_name_aux,
                occupation: member.occupation,
                professional_qualifications: member.professional_qualifications,
                father_id: member.father_id,
                father_name: father_name_aux,
                mother_id: member.mother_id,
                mother_name: mother_name_aux,
            };
        });
    }

}
