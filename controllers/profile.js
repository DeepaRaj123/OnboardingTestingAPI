const Profile = require('../models/profile.js');


exports.getApiDocumentation= (req,res,next)=>{
    res.write("<h1>My New Testing API</h1>")
    res.write("<h2>Working on Post Request</h2>")

    res.send();
  }
  
  exports.createProfile = (req, res, next) => {
    const name = req.body.name;
    const DOB = req.body.DOB;
    const Gender = req.body.Gender;
    const PrimaryDescription = req.body.PrimaryDescription;
    const SecondaryDescription = req.body.SecondaryDescription;
    const Location = req.body.Location;
    const Hobbies = req.body.Hobbies;
    const Likes = req.body.Likes;
    const DisLikes = req.body.DisLikes;
    const EmploymentDetails = req.body.EmploymentDetails;

    const profile = new Profile({
      name: name,
      DOB: DOB,
      Gender: Gender,
      PrimaryDescription: PrimaryDescription,
      SecondaryDescription: SecondaryDescription,
      Location: Location,
      Hobbies: Hobbies,
      Likes: Likes,
      DisLikes: DisLikes,
      EmploymentDetails: EmploymentDetails


    });
    profile.save()
      .then(result => {
        res.status(201).json({
          message: 'Profile created successfully!',
          profile: result
        });   
       })
      .catch(err => {
          res.status(400).send({ err});
      });
  };