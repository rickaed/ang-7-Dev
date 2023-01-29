import { Component, OnInit, Input } from '@angular/core';
import { Developer } from "../models/developer.model";
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})

export class DeveloperComponent implements OnInit {
  js!: Skill;
  css!: Skill;
  angular!: Skill;
  java!: Skill;
  python!: Skill;
  
  
  dev: Developer = {
    lastName: "Dupont",
    firstName: "Leon",
    age: 35,
    gender: "male",
    bio: "dev depuis 10 ans, orienté fullstack",
    skill: [this.js]
  };


  ngOnInit() {

    this.js = {
      name: "JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      site: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
    };
    // this.css = {
    //   name: "CSS",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-800px-CSS3_logo_and_wordmark.svg.png",
    //   site: "https://developer.mozilla.org/fr/docs/Web/CSS"
    // };
    // this.angular = {
    //   name: "Angular",
    //   logo: "https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg",
    //   site: "https://angular.io/"
    // };
    // this.java = {
    //   name: "Java",
    //   logo: "https://www.oracle.com/a/tech/img/rc10-java-badge-3.png",
    //   site: "https://dev.java/"
    // };
    // this.python = {
    //   name: "Python",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png",
    //   site: "https://www.python.org/"
    // }

  }
}
