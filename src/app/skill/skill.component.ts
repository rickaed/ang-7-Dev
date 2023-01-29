import { Component, Input } from '@angular/core';
import { DeveloperComponent } from '../developer/developer.component';

import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() devskill!: Skill;
 
}
