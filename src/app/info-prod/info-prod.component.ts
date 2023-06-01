import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

@Component({
  selector: 'app-info-prod',
  templateUrl: './info-prod.component.html',
  styleUrls: ['./info-prod.component.css']
})
export class InfoProdComponent implements OnInit {
  bicepsExerciseNames: string[] | null = null;
  tricepsExerciseNames: string[] | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getExerciseData();
  }

  getExerciseData() {
    const bicepsMuscle = 'biceps';
    const tricepsMuscle = 'triceps';

    this.http.get<Exercise[]>('https://api.api-ninjas.com/v1/exercises?muscle=' + bicepsMuscle, {
      headers: {
        'X-Api-Key': 'p54TSoh1BhHzyLd8ctAxBw==4TTGqeAHbHBRh2xo'
      }
    }).subscribe(
      data => {
        this.bicepsExerciseNames = data.map(exercise => exercise.name);
      },
      error => {
        console.error(error);
      }
    );

    this.http.get<Exercise[]>('https://api.api-ninjas.com/v1/exercises?muscle=' + tricepsMuscle, {
      headers: {
        'X-Api-Key': 'p54TSoh1BhHzyLd8ctAxBw==4TTGqeAHbHBRh2xo'
      }
    }).subscribe(
      data => {
        this.tricepsExerciseNames = data.map(exercise => exercise.name);
      },
      error => {
        console.error(error);
      }
    );
  }
}
