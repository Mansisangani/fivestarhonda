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
            About: 'Honda presents the all new Shine with amazing eSP Technology and eco-friendly BS-VI Engine that keeps emission in check.  Its ACG Starter removes gear meshing noise and helps start the engine without a jolt. And its 5-Speed Transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/Silent_startwith_acg.png`,
                    Title: 'Silent start with ACG',
                    Detail: `Honda's unique ACG starter removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/5-SPEED_TRANSMISSION.png`,
                    Title: '5-Speed Transmission',
                    Detail: `Enjoy a smooth and comfortable riding experience with 5-Speed Transmission.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/Dc_headlamp.png`,
                    Title: 'DC headlamp',
                    Detail: `The DC Headlamp gives consistent illumination while riding, irrespective of the speed and riding conditions.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/Engine_startstopswitch.png`,
                    Title: 'Engine start/stop switch',
                    Detail: `Start and stop your bike with just the flick of a switch anytime, anywhere. Enjoy enhanced convenience.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/IntegratedHeadlamp_Beam&_PassingSwitch.png`,
                    Title: 'Integrated Headlamp Beam & Passing Switch',
                    Detail: `Smart Single Switch for passing signal and low/high beams.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/14percent-more-milage.png`,
                    Title: '14%^ MORE MILEAGE',
                    Detail: `A completely new engine powered by Honda's globally acclaimed eSP technology delivers 14%^ more mileage. *Mileage has increased by 14% for Shine as compared to CB Shine BS IV.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/125cc-HETBS-VI-Engine.png`,
                    Title: '125cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/3plus3_yearswarranty_package.png`,
                    Title: '3+3 years warranty package',
                    Detail: `Get complete peace of mind with 6 years warranty package, comprising of 3 years standard and 3 years optional service warranty.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/shine/5-stepadjustable_suspension.png`,
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/shine/black.png` }, { src: `${process.env.PUBLIC_URL}/allcolors/shine/grey.png` }, { src: `${process.env.PUBLIC_URL}/allcolors/shine/blue.png` }, { src: `${process.env.PUBLIC_URL}/allcolors/shine/red.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/ShineBS6Brochure.pdf'
        },
        {
            Id: 2,
            Name: 'SP 125',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/sp125Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Silent_start_with_acg.png`,
                    Title: 'SILENT START WITH ACG',
                    Detail: `Honda’s unique ACG starter motor removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Full_digital_meter.png`,
                    Title: 'FULL DIGITAL METER',
                    Detail: `Always stay up-to-date with the Full Digital Meter which displays Real-time Fuel-efficiency, Average Fuel Efficiency, Distance-to-empty, Service Due Indicator, Gear Position Indicator & Eco Indicator.
                    *Distance-to-empty, real time and average mileage readings may vary as per variant and riding conditions`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/125cc_het_bs_vi_engine.png`,
                    Title: '125cc HET BS VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/esp.png`,
                    Title: 'eSP',
                    Detail: `With SP 125, expect nothing but the best. Honda’s Enhanced Smart Power (eSP) technology maximizes performance and fuel-efficiency by reducing friction. The ACG starter integrated with eSP technology starts the engine quietly giving you the best of riding experience and technology.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/PGM_FI.png`,
                    Title: 'PGM- FI',
                    Detail: `PGM-FI system with 8 sensors constantly injects optimum fuel and air mixture resulting in efficient combustion that aids in consistent power output and higher mileage.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Friction_reduction.png`,
                    Title: 'FRICTION REDUCTION',
                    Detail: `The piston cooling jet reduces friction and maintains optimum engine temperature. The offset cylinder, rocker roller arm fitted with needle bearing further reduces the frictional losses in the engine.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Mileage_up.png`,
                    Title: 'MILEAGE UP',
                    Detail: `A completely new engine powered by Honda’s globally acclaimed eSP Technology delivers 16%^ higher mileage
                    ^Mileage has increased by 16% for SP 125 as compared to BS IV to BS VI`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Het_tubeless_tyre.png`,
                    Title: 'HET TUBELESS TYRE^^',
                    Detail: `Honda’s low-rolling resistance tubeless tyre is specially designed to increase fuel-efficiency.
                    ^^Only rear tyre is HET.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/SP125/Aggressive_tank_design_with_edgy_graphics.png`,
                    Title: 'AGGRESSIVE TANK DESIGN WITH EDGY GRAPHICS',
                    Detail: `A definite head-turner, the muscular fuel tank design with edgy graphics makes it very appealing.`
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/SP125/IMPERIAL_RED_METALLIC.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/SP125/MATTE_AXIS_GREY_METALLIC.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/SP125/PEARL_SIREN_BLUE.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/SP125/STRIKING_GREEN.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/SP_125BS_VI.pdf'
        }, {
            Id: 3,
            Name: 'CD110',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/cd110Thumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/Silent_Start_with_ACG.png`,
                    Title: 'SILENT START WITH ACG',
                    Detail: `Honda’s Unique ACG starter motor removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/EngineStartStopSwitch.png`,
                    Title: 'ENGINE START/STOP SWITCH',
                    Detail: `Start and stop the bike with a flick of a switch and feel ultimate convenience at your fingertips.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/DC_Headlamp.png`,
                    Title: 'DC HEADLAMP',
                    Detail: `Keeps a steady illumination, irrespective of speed and riding conditions.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/Integrated_Headlamp.png`,
                    Title: 'INTEGRATED HEADLAMP BEAM & PASSING SWITCH',
                    Detail: `Integrated Smart Single Switch for passing signal and low/high beam.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/HETBS_VI_Engine.png`,
                    Title: '110cc HET BS-VI ENGINE',
                    Detail: `Ahead of its time, the latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.                    `
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/eSP_Technology.png`,
                    Title: 'eSP TECHNOLOGY',
                    Detail: `Honda’s Enhanced Smart Power (eSP) technology maximizes performance and fuel efficiency by reducing friction. The ACG Starter integrated with eSP technology starts the engine quietly, giving you the best of riding experience and technology.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/Friction_Reduction_Technologies.png`,
                    Title: 'FRICTION REDUCTION TECHNOLOGIES',
                    Detail: `The piston Cooling jet reduces friction and maintains optimum engine temperature. The offset cylinder, rocker roller arm fitted with needle bearing further reduces the frictional losses in the engine.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/HET_Tubeless_Tyre.png`,
                    Title: 'HET TUBELESS TYRE^',
                    Detail: `Honda’s low rolling resistance tubeless tyre is specially designed to increase fuel-efficiency. ^Only rear tyre is HET Tyre.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/cd110/Longerand_comfortable_Seat.png`,
                    Title: 'LONGER AND COMFORTABLE SEAT',
                    Detail: `Makes every ride comfortable for the rider & the pillion, despite the condition of the road.`
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/cd110/Athletic-Blue-Metallic-Deluxe.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/cd110/Black-Deluxe.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/cd110/Geny-Grey-Metallic-Deluxe.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/cd110/Imperial-Red-Metallic-Deluxe.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/cd110dreamBS6_brochure.pdf'
        }, {
            Id: 4,
            Name: 'CB UNICORN',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/unicorn.jpg`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/160cc-HET-BS-VI-Engine.png`,
                    Title: '160cc HET BS VI Engine',
                    Detail: `Ahead of its time, the latest innovation in engines contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/HET-Tubeless-Tyre-Technology.png`,
                    Title: 'HET Tubeless Tyre^',
                    Detail: `Honda’s low-rolling resistance tubeless tyre is specially designed to increase fuel-efficiency.
                    ^Only rear tyre is HET.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Maintenance-Free-Battery.png`,
                    Title: 'Maintenance Free Battery',
                    Detail: `With Maintenance Free Battery, here’s the peace of mind you are looking for.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Anti-lock-Braking-System-(ABS).png`,
                    Title: 'Anti-lock Braking System (ABS)',
                    Detail: `Take total control of the road with efficient and effective braking control across a wide variety of riding conditions.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/PGM-FI.png`,
                    Title: 'PGM-FI',
                    Detail: `PGM-FI is a sensor based advance system which constantly ensures optimum fuel delivery to the engine as per the ride conditions allowing efficient combustion and lesser emissions.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Premium-Front-Cowl.png`,
                    Title: 'Premium Front Cowl',
                    Detail: `Broad front cowl with smoked screen creates a bulking front stance, chrome crown on headlamp adds a stroke of premiumness.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Voluminous-Tank.png`,
                    Title: '3D Wing Mark on Voluminous Tank',
                    Detail: `Voluminous tank with aero type fuel cap reflects the macho, bold character of Unicorn. Also the 3D Honda Wing Mark on the fuel tank amplifies its premium feel.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Signature-Tail-Lamp.png`,
                    Title: 'Signature Tail Lamp',
                    Detail: `Sharp tail lamp designed to create dual chamber impression, it creates a distinctive personality of Unicorn.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/unicorn/Stylish-Instrument-Panel.png`,
                    Title: 'Stylish Instrument Panel',
                    Detail: `Merging three circle meter console design with blue backlit illumination gives a premium appeal.`
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/unicorn/unicornBS6-black.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/unicorn/unicornBS6-Gray.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/unicorn/unicornBS6-Red.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/unicornBS6Brochure.pdf'
        }, {
            Id: 5,
            Name: 'Livo',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/livoThumbnail.png`,
            About: `Some follow the herd. Some make their own way. Some are part of the crowd. Some stand apart. Presenting, the New Stylish and fully BS6 compliant Honda Livo. It’s time to not settle for the regular, but Live Life Livo Style! Oozing with oomph and innovation this 110cc eSP Technology enabled motorcycle delivers high performance with low emissions and gets you the very best in riding experience. Join Honda's Latest Movement of "The Quiet Revolution" which gives smooth silent start experience which makes it a true pioneer in the segment. We invite you to join Honda Livo's ingenuity and efficiency`,
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/110cc-HET-BS-VI-ENGINE.png`,
                    Title: '110cc HET BS-VI ENGINE',
                    Detail: `The latest innovation in engine contributes to a cleaner environment. The intelligent HET engine delivers an unmatched performance.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/eSP-Technology.png`,
                    Title: 'eSP TECHNOLOGY',
                    Detail: `Honda’s Enhanced Smart Power (eSP) technology maximizes performance and fuel-efficiency by reducing friction. The ACG starter integrated with eSP technology starts the engine quietly giving you the best riding experience and technology.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/PGM-FI.png`,
                    Title: 'PGM-FI',
                    Detail: `PGM-FI system with 8 sensors constantly injects optimum fuel and air mixture resulting in efficient combustion that aids in consistent power output and higher mileage.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/Silent-Start-With-ACG.png`,
                    Title: 'SILENT START WITH ACG',
                    Detail: `Honda’s unique ACG starter motor removes gear meshing noise and helps start the engine without a jolt.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/Friction-Reduction.png`,
                    Title: 'FRICTION REDUCTION',
                    Detail: `The piston cooling jet reduces friction and maintains optimum engine temperature. The offset cylinder, rocket roller arm fitted with needle bearing further reduces the frictional losses in the engine.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/HET-Tubeless-Tyre.png`,
                    Title: 'HET Tubeless Tyre*',
                    Detail: `Honda’s low-rolling resistance tubeless tyre is specially designed to increase fuel-efficiency.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/Edgy-Front-Look.png`,
                    Title: 'EDGY FRONT LOOK',
                    Detail: `Always arrive in style with the unique combination of a muscular shroud, chiseled visor, sharp headlight, and detailed air duct design.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/Strong-Rear-Appearance.png`,
                    Title: 'STRONG REAR APPEARANCE',
                    Detail: `Leave a strong impression with an excitingly designed tail-light and grab rail.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/livo/Muscular-Tank-Design-With-Striking-Graphics.png`,
                    Title: 'MUSCULAR TANK DESIGN WITH STRIKING GRAPHICS',
                    Detail: `A definite head-turner, the muscular fuel tank design with edgy graphics makes it very appealing.`
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/livoBS6/Athletic-Blue-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/livoBS6/Black.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/livoBS6/Imperial-Red-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/livoBS6/Matte-Axis-Grey-Metallic.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/LivoBS6_Brochure.pdf'
        }, {
            Id: 6,
            Name: 'XBlade',
            ThumbnaiImage: `${process.env.PUBLIC_URL}/MotorcycleThumbnail/xbladeThumbnail.png`,
            About: 'amazing comfort. amazing technology. amazing feeling. honda presents the all new shine with amazing esp technology and eco-friendly bs-vi engine that keeps emission in check. its acg starter removes gear meshing noise and helps start the engine without a jolt. and its 5-speed transmission ensures that your ride is always amazingly smooth.',
            Features: [
                {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Sporty-under-cowl.jpg`,
                    Title: 'SPORTY UNDER COWL',
                    Detail: `Electrify the streets with your magnetic presence.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Powerful-160cc-het-engine.jpg`,
                    Title: 'POWERFUL 160cc HET ENGINE',
                    Detail: `Best in class torque which translates into 0-100m* in 7.7 secs. The performance of X Blade goes beyond the ordinary. Brace yourself.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/130mm-wide-rear-tyre.jpg`,
                    Title: '130mm WIDE REAR TYRE',
                    Detail: `Command the road with a tough, bold presence.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/PGMFI.jpg`,
                    Title: 'PGM-FI',
                    Detail: `An intelligent PGM-FI system whose 8 sensors constantly injects optimum fuel and air mixture resulting in efficient combustion that aids in consistent power output and lower emission.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Monoshock-Suspension.jpg`,
                    Title: 'MONOSHOCK SUSPENSION',
                    Detail: `Resilient and ready to take on the toughest challenges with superior handling and right control.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Dual-Outlet-Muffler.jpg`,
                    Title: 'DUAL OUTLET MUFFLER',
                    Detail: `For that enhanced sporty look, that goes beyond the regular.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Long-Seat.jpg`,
                    Title: 'LONG SEAT',
                    Detail: `Comfortable seating that leaves you energised, ready to take on anything, even after long rides.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Dual-petal-disc-brakes-with-abs.jpg`,
                    Title: 'DUAL PETAL DISC BRAKES WITH ABS',
                    Detail: `276mm front and 220mm rear disc brakes with Anti-Lock Braking System (ABS) that give superior control and heightened steering ability, even when braking hard.`
                }, {
                    Image: `${process.env.PUBLIC_URL}/specification/xblade/Street-tech-digital-meter.jpg`,
                    Title: 'STREET-TECH DIGITAL METER',
                    Detail: `Boldly set out in confidence, with an innovative display that shares all the relevant information like service due indicator and gear position indicator.`
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/xblade/matte-AXIS-greY-metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/xblade/matte-marvel-blue-metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/xblade/pearl-igneous-black.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/xblade/pearl-spartan-red.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/xBladeBS6_Brochure.pdf'
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/hornet2/MatTE-Axis-Grey-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/hornet2/MatTE-Marvel-Blue-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/hornet2/MatTE-Sangria-Red-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/hornet2/Pearl-Igneous-Black.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/Hornet2point0_Brochure.pdf'
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/dio/DeluxeGrey.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/dio/DeluxeRed.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/dio/DeluxeYellow.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/dioBS6Brochure.pdf'
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/activa/Black.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa/Blue.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa/Gray.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa/red.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa/white.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa/Yellow.png` },],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/Activa6GBrochure.pdf'
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/activa125/Heavy-grey-Metallic-prev.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa125/Midnight-Blue-Metallic-prev.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa125/Pearl-Precious-White-prev.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/activa125/Rebel-Red-Metallic-prev.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/Activa125_BS-VI.pdf'
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
            Photos: [{ src: `${process.env.PUBLIC_URL}/allcolors/grazia/Matte-Axis-Grey-Metallic.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/grazia/Matte-Cyber-Yellow.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/grazia/Pearl-Siren-Blue.png` },
            { src: `${process.env.PUBLIC_URL}/allcolors/grazia/Pearl-Spartan-Red.png` }],
            Ebrochure: 'https://honda2wheelersindia.com/assets/pdf/GraziaBS6_brochure.pdf'
        }
    ]
}