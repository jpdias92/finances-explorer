export class Movement {
    id: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    observations: string;

    public static map(data: any): Movement[] {
        return data.map((movement: any) => {
            return {
            id: movement.movement_id,
            date: movement.movement_date,
            description: movement.description,
            amount: movement.amount,
            category: movement.category,
            observations: movement.comment
            };
        });
    }

    public static mapAction(action: string) : string {
        let mappedAction: string;
        switch(action) {
            case "New Movement": {
                mappedAction = "New";
                break;
            }

            case "Update Movement": {
                mappedAction = "Update";
                break;
            }

            default: {
                mappedAction = "None";
                break;
            }
        }

        return mappedAction;
    }
}
