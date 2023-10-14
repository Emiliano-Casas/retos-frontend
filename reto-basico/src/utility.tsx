import { productsAPI } from "./typesConstants";

export async function getItem(itemID: string | undefined) : Promise<any> {
	return new Promise(resolve => {
		fetch(productsAPI + itemID)
			.then(response => {
				resolve(response.json());
			});
	})
}