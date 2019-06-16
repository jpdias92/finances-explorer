import { Category } from './category';

export class Movement {
    id: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    observations: string;

    public static map(data: any, categories: Category[]): Movement[] {

        return data.map((movement: any) => {
            return {
            id: movement.movement_id,
            date: movement.movement_date,
            description: movement.description,
            amount: movement.amount,
            category: categories.find(cat => cat.id == movement.category_id).name,
            observations: movement.comment
            };
        });
    }


}
