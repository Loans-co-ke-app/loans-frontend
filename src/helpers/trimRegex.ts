class TrimRegex {

	public static trimRegex = (str: string, regex: RegExp, char: string) => {
		return str.replace(regex, char);
	};

	public static trimAndReplace = (str: string, regex: RegExp, char: string) => {
		return str.trim().replace(regex, char);
	};

}

export default  TrimRegex;