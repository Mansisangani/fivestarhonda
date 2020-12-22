export interface IFeatures {
    Image: string;
    Title: string;
    Detail: string;
}

export interface ISpecification {
    "BodyDimensions": { Key: string; value: string }[];
    "Engine": { Key: string; value: string }[];
    "Transmission": { Key: string; value: string }[];
    "Tyresbrakes": { Key: string; value: string }[],
    "FrameSuspension": { Key: string; value: string }[],
    "Electricals": { Key: string; value: string }[]
}

export interface IProducts {
    Id: number;
    Name: string;
    ThumbnaiImage: string;
    About: string;
    Features: IFeatures[];
    Specifications: any;
    Photos: { src: string }[];
    Ebrochure: string;
}

export default class Data {
    public static motorCycle: IProducts[] = [
        {
            Id: 1,
            Name: 'Shine',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/shineThumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [{ src: `${process.env.PUBLIC_URL}/shine/black.png` }, { src: `${process.env.PUBLIC_URL}/shine/grey.png` }, { src: `${process.env.PUBLIC_URL}/shine/blue.png` }, { src: `${process.env.PUBLIC_URL}/shine/red.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        },
        {
            Id: 2,
            Name: 'SP 125',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/sp125Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }, {
            Id: 3,
            Name: 'CD110',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/cd110Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }, {
            Id: 4,
            Name: 'CB UNICORN',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/unicorn.jpg`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }, {
            Id: 5,
            Name: 'Livo',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/livoThumbnail.png`,
            About: `Some follow the herd. Some make their own way. Some are part of the crowd. Some stand apart. Presenting, the New Stylish and fully BS6 compliant Honda Livo. It’s time to not settle for the regular, but Live Life Livo Style! Oozing with oomph and innovation this 110cc eSP Technology enabled motorcycle delivers high performance with low emissions and gets you the very best in riding experience. Join Honda's Latest Movement of "The Quiet Revolution" which gives smooth silent start experience which makes it a true pioneer in the segment. We invite you to join Honda Livo's ingenuity and efficiency`,
            Features: [
                {
                    Image: '',
                    Title: 'eSP TECHNOLOGY',
                    Detail: `Honda’s Enhanced Smart Power (eSP) technology maximizes performance and fuel-efficiency by reducing friction. The ACG starter integrated with eSP technology starts the engine quietly giving you the best riding experience and technology.`
                }, {
                    Image: '',
                    Title: 'PGM-FI',
                    Detail: `PGM-FI system with 8 sensors constantly injects optimum fuel and air mixture resulting in efficient combustion that aids in consistent power output and higher mileage.`
                }, {
                    Image: '',
                    Title: 'SILENT START WITH ACG',
                    Detail: `Honda’s unique ACG starter motor removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: 'FRICTION REDUCTION',
                    Detail: `The piston cooling jet reduces friction and maintains optimum engine temperature. The offset cylinder, rocket roller arm fitted with needle bearing further reduces the frictional losses in the engine.`
                }, {
                    Image: '',
                    Title: 'HET Tubeless Tyre*',
                    Detail: `Honda’s low-rolling resistance tubeless tyre is specially designed to increase fuel-efficiency. *Only Rear Tyre is HET`
                }, {
                    Image: '',
                    Title: 'EDGY FRONT LOOK',
                    Detail: `Always arrive in style with the unique combination of a muscular shroud, chiseled visor, sharp headlight, and detailed air duct design.`
                }, {
                    Image: '',
                    Title: 'STRONG REAR APPEARANCE',
                    Detail: `Leave a strong impression with an excitingly designed tail-light and grab rail.`
                }, {
                    Image: '',
                    Title: 'MUSCULAR TANK DESIGN WITH STRIKING GRAPHICS',
                    Detail: `A definite head-turner, the muscular fuel tank design with edgy graphics makes it very appealing.`
                }, {
                    Image: '',
                    Title: 'DIGITAL ANALOGUE METER',
                    Detail: `Get all the ride information in style with precision.`
                }, {
                    Image: '',
                    Title: 'DC HEADLAMP',
                    Detail: `The DC Headlamp gives consistent illumination while riding irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'SEAL CHAIN',
                    Detail: `The Seal Chain is low on maintenance and high on durability for a hassle-free riding experience.`
                }, {
                    Image: '',
                    Title: 'ENGINE START/STOP SWITCH',
                    Detail: `Start and stop your bike with just the flick of a switch anytime anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: '5-STEP ADJUSTABLE REAR SUSPENSION',
                    Detail: `Make your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }, {
                    Image: '',
                    Title: 'SERVICE DUE INDICATOR',
                    Detail: `Want to keep your Livo in the best condition all the time? No problem. Service due indicator on the meter console will give a reminder, even if you forget.`
                }, {
                    Image: '',
                    Title: 'CBS WITH EQUALIZER',
                    Detail: `The Equalizer Technology in Combi Brake System distributes optimal braking force between front and rear wheels ensuring shorter braking distance with rock-solid balance.`
                }, {
                    Image: '',
                    Title: 'LONG AND COMFORTABLE SEAT',
                    Detail: `Makes every ride comfortable for the rider and pillion, despite the conditions of the road.`
                }, {
                    Image: '',
                    Title: 'INTEGRATED HEADLAMP BEAM & PASSING SWITCH',
                    Detail: `Integrated Smart Single Switch for passing signal and low/high beam.`
                }, {
                    Image: '',
                    Title: '110cc HET BS-VI ENGINE',
                    Detail: `The latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2020 mm' }
                    , { Key: 'Width', value: '751 mm' }, { Key: 'Height', value: '1116 mm' }, { Key: 'Wheel Base', value: '1278 mm' }
                    , { Key: 'Ground Clearance', value: '163 mm' }, { Key: 'Kerb Weight', value: '115 kg' }, { Key: 'Seat Length', value: '690 mm' }
                    , { Key: 'Seat Height', value: '790 mm' }, { Key: 'Fuel Tank Capacity', value: '9 L' }],
                Engine: [{ Key: 'Type', value: 'Air Cooled, 4 Stroke, SI, BS-VI Engine' },
                { Key: 'Displacement', value: '	109.51 cc' },
                { Key: 'Max Engine Output', value: '6.47 kW @7500 rpm' },
                { Key: 'Max Torque', value: '9.30 N-m @ 5500 rpm' },
                { Key: 'Fuel System', value: 'PGM-FI' },
                { Key: 'Bore x Stroke', value: '47 x 63.121 mm' },
                { Key: 'Compression Ratio', value: 'Air Cooled, 4 Stroke, SI, BS-VI Engine' },
                { Key: 'Starting Method', value: 'Self/Kick' }],
                Transmission: [{ Key: 'Clutch Type', value: 'Multiplate Wet Clutch' }, { Key: 'No of Gears', value: '4 Gear' }],
                Tyresbrakes: [{ Key: 'Tyre Size & Type (Front)', value: '80/100-18 M/C 47P, Tubeless' },
                { Key: 'Tyre Size & Type (Rear)', value: '80/100-18 M/C 54P, Tubeless' },
                { Key: 'Brake Type & Size (Front)', value: 'Disc-240 mm, Drum-130 mm' },
                { Key: 'Brake Type & Size (Rear)', value: 'Drum-130 mm' },],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' },
                { Key: 'Front Suspension', value: 'Telescopic' },
                { Key: 'Rear Suspension', value: 'Hydraulic Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5Ah' },
                { Key: 'Headlamp', value: 'Halogen Bulb, DC' }]
            },
            Photos: [{ src: `${process.env.PUBLIC_URL}/livoBS6/Athletic-Blue-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/livoBS6/Black.png` },
            { src: `${process.env.PUBLIC_URL}/livoBS6/Imperial-Red-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/livoBS6/Matte-Axis-Grey-Metallic.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/LivoBS6_Brochure.pdf'
        }, {
            Id: 6,
            Name: 'XBlade',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/xbladeThumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }, {
            Id: 7,
            Name: 'Hornet 2.0',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/hornet2.0Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }
    ]

    public static scooter: IProducts[] = [
        {
            Id: 1,
            Name: 'Dio',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/ScooterThumbnail/dio.jpg`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        },
        {
            Id: 2,
            Name: 'Activa 6G',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/ScooterThumbnail/activa6gThumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        },
        {
            Id: 3,
            Name: 'Activa 125',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/ScooterThumbnail/activa152Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        },
        {
            Id: 4,
            Name: 'Grazia 125',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/ScooterThumbnail/grazia125Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: '',
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: '',
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: '',
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: '',
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: '',
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: '',
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: '',
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: '',
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: '',
                    Title: '5-step adjustable suspension',
                    Detail: `Makes your ride comfortable with 5-Step Adjustable Rear Suspension on all road conditions.`
                }
            ],
            Specifications: {
                BodyDimensions: [{ Key: 'Length', value: '2046 mm' }],
                Engine: [{ Key: 'Type', value: '4 Stroke, SI, BS-VI Engine' }],
                Transmission: [{ Key: 'No of gears', value: '5' }],
                Tyresbrakes: [{ Key: 'Tyre size (front)', value: '80/100-18 M/C 47P' }],
                FrameSuspension: [{ Key: 'Frame type', value: 'Diamond Type' }],
                Electricals: [{ Key: 'Battery', value: '12V, 5.0Ah' }]
            },
            Photos: [],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        }
    ]
}