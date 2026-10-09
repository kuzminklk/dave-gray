function verifyRoles(...allowedRoles) {
	return (req, res, next) => {
		if (!req?.roles) return res.sendStatus(401) // HTTP 401 — Unauthorized
		const result = req.roles.map((role) => allowedRoles.includes(role)).find((value) => value === true)
		if (!result) return res.sendStatus(401)
		next()
	}
}

export default verifyRoles
