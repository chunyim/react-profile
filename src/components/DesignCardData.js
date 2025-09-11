import application_form from "../assets/application_form.png";
import dwyimsoccerweb from "../assets/dwyimsoccerweb.png";
import soccerlogoimg from "../assets/soccerlogoimg.png";
import soccerposter from "../assets/soccerPoster.png"

const DesignCardData = [
  {
    imgsrc: application_form,
    title: "Acrobat -- Application from design with logo",
    text: "The application was created using Adobe Acrobat and Google Docs to design a fillable PDF form.",
    view: [{ label: "Application Form", url: "/Yim_Soccer_Training_Application_Form.pdf" }],
  },
  {
    imgsrc: dwyimsoccerweb,
    title: "Dreamweaver -- Soocer Coaching Web Design",
    text: "A responsive, accessible website built in Adobe Dreamweaver to showcase programs, schedule, reviews, and contact information for Yim Soccer Coaching.",
    view: [
      { label: "GitHub Repo", url: "https://github.com/chunyim/yim-soccer" },
    ],
  },
  {
    imgsrc: soccerlogoimg,
    title: "Photoshop -- Logo for Yim Soccer Coaching",
    text: "Designed a modern and professional soccer logo in Adobe Photoshop",
    view: [{ label: "Logo Design", url: "/soccerlogoimg.png" }]
  },
    {
    imgsrc: soccerposter,
    title: "Photoshop -- Poster for Yim Soccer Coaching",
    text: "Created a visually engaging and professional soccer coaching poster using Adobe Photoshop, incorporating a custom logo nd QR code linked to the applicaation form.",
    view: [{ label: "Poster Design", url: "/soccerPoster.png" }]
  },
];

export default DesignCardData;
