const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Shree S.V Patel BBA & BCA College., Surat',
                degree: 'Bachelor Of Computer Application (BCA)',
                detail: "Bachelor's Degree in BCA from Shree S.V Patel BBA & BCA College.",
                year: '2021-2023'
            },
            {
                id: 1,
                title: 'Tapovan Group Of School., Surat',
                degree: 'Higher Secondary School (HSC)',
                detail: "Completed HSC bord from Tapovan Group Of School Surat.",
                year: '2020-2021'
            },
            {
                id: 2,
                title: 'Smt. RMD Lakhani vidhya sankul., Talaja',
                degree: 'Secondary School (SSC)',
                detail: "Completed SSC from Smt. RMD Lakhani vidhya sankul., Talaja",
                year: '2018-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Nucleus Lab',
                role: 'Full-Stack Developer',
                url: 'https://nslab.in/',
                desc: 'As a Full-Stack developer, I use Node, React, Next & JavaScript to build user interfaces for web applications.',
                year: '03/2023 - Present',
                location: 'Mota Varachha, Surat'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
