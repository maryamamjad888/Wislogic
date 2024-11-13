const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://sites.dubbay.com/wistech/abev"
		: "http://localhost:3000";

export default baseUrl;