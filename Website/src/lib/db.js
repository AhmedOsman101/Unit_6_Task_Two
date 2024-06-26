export default {
	Plans: [
		{
			id: "1",
			title: "Basic",
			features: [
				"1x alarm system",
				"1x CCTV camera",
				"Local CCTV footage storage",
				"NOT centrally monitored",
			],
			basePrice: 19,
			discountPrice: 15,
		},

		{
			id: "2",
			title: "Deluxe",
			features: [
				"1x alarm system",
				"4x CCTV cameras",
				"Local CCTV footage storage",
				"Online CCTV footage storage",
				"Centrally monitored",
			],
			basePrice: 49,
			discountPrice: 37,
		},
		{
			id: "3",
			title: "Standard",
			features: [
				"1x alarm system",
				"2x CCTV cameras",
				"Online CCTV footage storage",
				"Local CCTV footage storage",
				"NOT centrally monitored",
			],
			basePrice: 32,
			discountPrice: 24,
		},
	],
	Services: [
		{
			id: "1",
			name: "Security risk assessments",
		},
		{
			id: "2",
			name: "Sale and installation of security systems (alarms and CCTV)",
		},
		{
			id: "3",
			name: "Security system maintenance",
		},
		{
			id: "4",
			name: "24/7 monitoring of:",
			content: ["Alarm systems", "CCTV footage"],
		},
	],
	FAQs: [
		{
			id: "1",
			question:
				"What are some basic security measures I can implement at home or in my business?",
			answers: [
				"Installing sturdy locks on doors and windows.",
				"Using security cameras and alarm systems.",
				"Securing valuable items in safes.",
				"Ensuring proper lighting around the property.",
			],
		},
		{
			id: "2",
			question:
				"How can I protect my digital assets and data from cyber threats?",
			answers: [
				"Using strong, unique passwords for online accounts.",
				"Enabling two-factor authentication where possible.",
				"Keeping software and operating systems updated.",
				"Being cautious of phishing emails and suspicious links.",
			],
		},
		{
			id: "3",
			question:
				"What should I do in case of a security breach or emergency?",
			answers: [
				"Contacting emergency services immediately if there's a threat to personal safety.",
				"Reporting security incidents to the appropriate authorities.",
				"Implementing incident response plans for businesses to mitigate the impact of breaches.",
			],
		},
		{
			id: "4",
			question:
				"What are some common security risks and vulnerabilities to be aware of?",
			answers: [
				"Physical security risks like theft, vandalism, or unauthorized access.",
				"Cybersecurity risks such as malware infections, data breaches, and phishing attacks.",
				"Social engineering tactics used to manipulate individuals into revealing sensitive information.",
			],
		},
		{
			id: "5",
			question:
				"How can I improve the security of my home or business network?",
			answers: [
				"Using firewalls and antivirus software to protect against malware.",
				"Securing Wi-Fi networks with strong passwords and encryption.",
				"Regularly updating router firmware and disabling unnecessary network services.",
			],
		},
		{
			id: "6",
			question:
				"What are some best practices for securing sensitive information and documents?",
			answers: [
				"Implementing access controls to limit who can view or edit sensitive data.",
				"Encrypting confidential files and communications.",
				"Properly disposing of paper documents and electronic devices containing sensitive information.",
			],
		},
		{
			id: "7",
			question:
				"How can I assess and mitigate security risks specific to my home or business?",
			answers: [
				"Conducting regular security risk assessments to identify vulnerabilities.",
				"Developing and implementing security policies and procedures.",
				"Training employees or family members on security awareness and best practices.",
			],
		},
		{
			id: "8",
			question: "What role does surveillance play in enhancing security?",
			answers: [
				"Acting as a deterrent to potential intruders or criminals.",
				"Providing evidence in case of security incidents or disputes.",
				"Allowing for remote monitoring of premises and assets.",
			],
		},
		{
			id: "9",
			question:
				"How can I stay informed about the latest security threats and trends?",
			answers: [
				"Subscribing to security newsletters, blogs, or forums.",
				"Following reputable security organizations and experts on social media.",
				"Participating in security training and conferences to stay up-to-date.",
			],
		},
		{
			id: "10",
			question:
				"What should I consider when choosing security products or services for my home or business?",
			answers: [
				"Assessing the specific security needs and risks of your property or organization.",
				"Researching and comparing different products or service providers.",
				"Checking for certifications, warranties, and customer reviews before making a decision.",
			],
		},
	],
	Features: [
		{
			id: 1,
			name: "Comprehensive Security Risk Assessments",
			image: "https://images.pexels.com/photos/4592239/pexels-photo-4592239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Expert evaluation of potential security vulnerabilities.",
				"Customized risk assessment reports detailing identified threats and recommended solutions.",
				"Assessment of physical and digital security measures to safeguard against various risks.",
			],
		},
		{
			id: 2,
			name: "Sale and Installation of Security Systems",
			image: "https://images.pexels.com/photos/8836072/pexels-photo-8836072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"High-quality security systems available for purchase tailored to specific needs.",
				"Professional installation services ensuring optimal functionality and effectiveness.",
				"Wide range of security products including alarms, CCTV cameras, access control systems, and more.",
			],
		},
		{
			id: 3,
			name: "Security System Maintenance",
			image: "https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Regular maintenance plans to ensure the continued reliability and performance of security systems.",
				"Proactive inspections and repairs to address potential issues before they escalate.",
				"Priority service for maintenance subscribers to minimize downtime and disruptions.",
			],
		},
		{
			id: 4,
			name: "24/7 Monitoring of Alarm Systems",
			image: "https://images.pexels.com/photos/9739769/pexels-photo-9739769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Constant monitoring of alarm systems to detect and respond to security breaches promptly.",
				"Real-time alerts sent to designated contacts and emergency services when alarms are triggered.",
				"Integration with mobile apps or online platforms for remote monitoring and control.",
			],
		},
		{
			id: 5,
			name: "24/7 Monitoring of CCTV Footage",
			image: "https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Continuous surveillance of CCTV footage to identify suspicious activities or incidents.",
				"Monitoring by trained professionals who can intervene or dispatch authorities as needed.",
				"Access to archived footage for investigative or evidentiary purposes.",
			],
		},
		{
			id: 6,
			name: "Customized Security Solutions",
			image: "https://images.pexels.com/photos/10902545/pexels-photo-10902545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Tailored security solutions designed to meet the specific requirements and budget constraints of clients.",
				"Consultative approach involving detailed discussions and site assessments to understand unique needs.",
				"Flexibility to accommodate evolving security needs and technological advancements.",
			],
		},
		{
			id: 7,
			name: "Responsive Customer Support",
			image: "https://images.pexels.com/photos/9942069/pexels-photo-9942069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Dedicated customer support team available round-the-clock to address inquiries and concerns.",
				"Rapid response times for emergency situations or urgent service requests.",
				"Regular communication and updates on the status of ongoing projects or service activities.",
			],
		},
		{
			id: 8,
			name: "Compliance and Certification",
			image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			content: [
				"Adherence to industry standards and regulations to ensure compliance with legal requirements.",
				"Certification from reputable organizations demonstrating commitment to quality and professionalism.",
				"Ongoing training and education for staff to stay abreast of the latest security protocols and best practices.",
			],
		},
	],
};
