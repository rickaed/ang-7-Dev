import { Component, OnInit, Input } from '@angular/core';
import { Developer } from "../models/developer.model";
import { Skill } from '../models/skill.model';
// import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  dev!: Developer;
  js!: Skill;
  css!: Skill;
  angular!: Skill;
  java!: Skill;
  python!: Skill;

  ngOnInit() { 

    this.dev = new Developer(
      "Dupont",
      "Leon",
      35,
      "male",
      "dev depuis 10 ans, orienté fullstack",
      [this.angular,this.js,this.java,this.python]
    );
    this.js = new Skill(
      "JS",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      "https://developer.mozilla.org/fr/docs/Web/JavaScript"
    );
    this.css = new Skill(
      "CSS",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-800px-CSS3_logo_and_wordmark.svg.png",
      "https://developer.mozilla.org/fr/docs/Web/CSS");
    this.angular = new Skill(
      "Angular",
      "https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg",
      "https://angular.io/"
    );
    this.java = new Skill("Java",
      "https://www.oracle.com/a/tech/img/rc10-java-badge-3.png",
      "https://dev.java/");
    this.python = new Skill(
      "Python",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
      "https://www.python.org/"
    );

  }

  // devs: Developer[] = [
  //   {
  //     lastnNme: "Dupont",
  //     firstName: "Leon",
  //     age: 35,
  //     gender: "male",
  //     bio: "dev depuis 10, orienté fullstack",
  //     skill: [new Skill("Angular", "https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg", "https://angular.io/"),
  //     new Skill("JS", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript"),
  //     new Skill("Java", "https://www.oracle.com/a/tech/img/rc10-java-badge-3.png", "https://dev.java/"),
  //     ]
  //   },
  //   {
  //     lastnNme: "Bh",
  //     firstName: "Ced",
  //     age: 38,
  //     gender: "male",
  //     bio: "en formation dev fullstack, apetence Backend",
  //     skill: [new Skill("Angular", "https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg", "https://angular.io/"),
  //     new Skill("TS", "https://grafikart.fr/uploads/icons/typescript.svg", "https://www.typescriptlang.org"),
  //     ]
  //   },
  //   {
  //     lastnNme: "Cri",
  //     firstName: "Alicia",
  //     age: 28,
  //     gender: "female",
  //     bio: "en formation dev fullstack, apetence font",
  //     skill: [new Skill("Angular", "https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg", "https://angular.io/"),
  //     new Skill("CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-800px-CSS3_logo_and_wordmark.svg.png", "https://developer.mozilla.org/fr/docs/Web/CSS"),
  //     ]
  //   },
  //   {
  //     lastnNme: "Calla",
  //     firstName: "Marie",
  //     age: 37,
  //     gender: "female",
  //     bio: "dev Backend depuis 3ans, insfractructure reseu",
  //     skill: [new Skill("Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png", "https://www.python.org/"),
  //     new Skill("PHP", "https://user.oc-static.com/upload/2021/09/30/16330114394851_p1c2-1.png", "https://www.php.net"),
  //     ]
  //   }
  // ]

  // flourQuantity: number = 0;
  // saltQuantity: number = 0;
  // sugarQuantity: number = 0;
  // eggQuantity: number = 0;
  // numberOfCookies: number = 0;

}
