wn.query_reports["Payment Collection With Ageing"] = {
	"filters": [
		{
			"fieldname": "from_date",
			"label": "From Date",
			"fieldtype": "Date",
			"default": wn.defaults.get_user_default("year_start_date"),
			"width": "80"
		},
		{
			"fieldname":"to_date",
			"label": "To Date",
			"fieldtype": "Date",
			"default": get_today()
		},
		{
			"fieldname":"account",
			"label": "Customer Account",
			"fieldtype": "Link",
			"options": "Account",
			"get_query": function() {
				var company = wn.query_report.filters_by_name.company.get_value();
				return {
					"query": "accounts.utils.get_account_list", 
					"filters": {
						"is_pl_account": "No",
						"debit_or_credit": "Debit",
						"company": company,
						"master_type": "Customer"
					}
				}
			}
		},
		{
			"fieldname":"company",
			"label": "Company",
			"fieldtype": "Link",
			"options": "Company",
			"default": sys_defaults.company
		},
	]
}