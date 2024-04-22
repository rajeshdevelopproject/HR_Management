export function ApplicationData(){
    return{

    }
}

export function TodayInterview(){
    return[]
}

export function PostedJobs(){

}

export function CandidateStatus(){

    let data = {
        'header':[{'key':'jobid',
    "Displayname":'Job ID','width':'80px'},{key:'name',Displayname:'Name','width':'180px'},{key:'position',Displayname:"Position",'width':'140px'},{key:'1stlevel',Displayname:'1st Level','width':'140px'},{key:'2ndlevel',Displayname:'2nd Level','width':'140px'},{key:'3rdlevel',Displayname:'3rd Level','width':'140px'},{key:'4thlevel',Displayname:'4th Level','width':'140px'},{key:'totalmarks',Displayname:'Total Marks','width':'140px'},{key:'status',Displayname:"Status",'width':'140px'},{key:'actions',Displayname:'Actions','width':'110px'}],
        'data':[
            {
                "jobid":'001',
                "name":"Rajesh",
                "position":"Designer",
                "1stlevel":'7/10',
                "2ndlevel":'7/10',
                '3rdlevel':'6/10',
                '4thlevel':'...',
                'totalmarks':'...',
                'status':'Active',
                'actions':'',
          
            },
            {
                "jobid":'002',
                "name":"Murugan",
                "position":"Web Developer",
                "1stlevel":'9/10',
                "2ndlevel":'8/10',
                '3rdlevel':'8/10',
                '4thlevel':'7/10',
                'totalmarks':'32/40',
                'status':'Hired',
                'actions':''
            },
            {
                "jobid":'003',
                "name":"Theena",
                "position":"Python Developer",
                "1stlevel":'7/10',
                "2ndlevel":'7/10',
                '3rdlevel':'0',
                '4thlevel':'0',
                'totalmarks':'20/40',
                'status':'Reject',
                'actions':''
            },
            {
                "jobid":'004',
                "name":"Ram",
                "position":"Designer",
                "1stlevel":'7/10',
                "2ndlevel":'7/10',
                '3rdlevel':'6/10',
                '4thlevel':'...',
                'totalmarks':'...',
                'status':'Active',
                'actions':''
            },
            {
                "jobid":'005',
                "name":"Rajeshkumar",
                "position":"React",
                "1stlevel":'7/10',
                "2ndlevel":'7/10',
                '3rdlevel':'6/10',
                '4thlevel':'8/10',
                'totalmarks':'28/40',
                'status':'Hired',
                'actions':''
            }
        ]

        
    }
    return data

}
export function UpComingData(){
    let data ={
        "isImage":false,
        "isButton":true,
        "title":'Upcomings',
        "data":[
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'Stephan',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'img':'',
            'isFirst':false,
    
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'Stella',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'isFirst':false,
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'Stella',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'isFirst':false,
        },
        
    ]
}
    return data
}
export function Activity(){
    let data ={
        "isImage":true,
        "isButton":false,
        "title":'Activity',
        "data":[
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'[python developer]',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'img':'./user_act.png',
            'isFirst':true,
    
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'[python developer]',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'img':'./user_act.png',
            'isFirst':true,
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'Interview with Designer',
            "second":'Created by ',
            "spl":'[python developer]',
            "thired":'10 A.M to 11 A.M',
            "buttontype":'fill',
            'img':'./user_act.png',
            'isFirst':true,
        },
        
    ]
}
    return data
}
export function HiringCandidates(){
    let data ={
        "isImage":true,
        "isButton":true,
        "title":'Hiring Candidates',
        "data":[
        {
            "date":7,
            "month":'Feb',
            "title":'John Doe',
            "second":'Senior Python Develpper ',
            "spl":'',
            "thired":'Hired by: Stella',
            "buttontype":'unfill',
            'img':'./user_act.png',
            'isFirst':true,
    
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'John Doe',
            "second":'Senior Python Develpper',
            "spl":'',
            "thired":'Hired by: Stella',
            "buttontype":'unfill',
            'img':'./user_act.png',
            'isFirst':true,
            
        },
        {
            "date":7,
            "month":'Feb',
            "title":'John Doe',
            "second":'Senior Python Develpper',
            "spl":'',
            "thired":'Hired by: Stella',
            "buttontype":'unfill',
            'img':'./user_act.png',
            'isFirst':true,
        },
        
    ]
}
    return data
}