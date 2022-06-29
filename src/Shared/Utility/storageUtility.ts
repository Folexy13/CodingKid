export const Storage = {
	setItem: (itemKey: string, itemValue: any) => {
		if (typeof itemValue === 'object') {
			itemValue = JSON.stringify(itemValue)
		}
		sessionStorage.setItem(itemKey, itemValue)
	},

	getItem: (itemKey: string) => {
		const itemValue = sessionStorage.getItem(itemKey)
		if (!itemValue) return

		try {
			return JSON.parse(itemValue)
		} catch (err) {
			return itemValue
		}
	},

	removeItem: (itemKey: string) => {
		sessionStorage.removeItem(itemKey)
	},
}
