import { Component } from '@angular/core';
import { ProjectItemComponent  } from './project-item.component';
import { MsgComponent } from './msg.component';
import { ProjectDetailsComponent  } from './project-details.component';



export class Project {
    name: string;
    description: string;
    shortName: string;
    year: string;

}

export class Skill {
    name: string;


}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ "./css/app.css" ]
})
export class AppComponent  {
    appTitle: string = 'Welcome to my Resume Website!!';
    jobPosition: string = 'Software Engineer.';
    schoolTitle: string = 'Education:';
    projectTitle: string = 'List of Projects:';
    appSkill: string = 'Technical Skills:';
    name: string;
    projects= PROJECTS;

	currentProject = Project;

    schools: any;
    skills: any;

	showProject(item) {
	  this.currentProject = item;

	}



    constructor() {

        this.schools = [
            {
                name: 'Udacity',
                major: 'Full Stack Developer Nanodegree'
            },
            {
                name: 'University of MN',
                major: 'Electrical Engineering'
            },
            {
                name: 'Metrostate',
                major: 'Computer Information Systems'
            }
        ]


        this.skills = [
          {
              name: 'Angular'

          }, {
              name: 'JavaScript',

          },
          {
              name: 'Python',

          },{
              name: 'HTML5',

          },
          {
              name: 'CSS3',

          },
          {
              name: 'PostgreSQL',

          }

       ]
    }




    }




    var PROJECTS: Project[] = [
        {
            "name": "Item Catalog",
            "shortName": "catalog",
            "description": "Developed a RESTful web application using the Python framework Flask.Used third-party OAuth authentication.",
            "year": "July 2017"

        },
        {
            "name": "Tournament",
            "shortName": "Tournament",
            "description": "Developed a database schema to store the game matches between players.Used the PostgreSQL database to keep track of players and matches in a tournament.",
            "year": "April 2017"

        },
        {
            "name": "Multi User Blog",
            "shortName": "blog",
            "description": "Designed a multi - user blog where the user is directed to log in, log out, and signup pages.The app is built using Google App Engine, and jinja framework.",
            "year": "April 2017"

        },
        {
            "name": "Neighborhood Map",
            "shortName": "neighborhood",
            "description": "Developed a single page application using Google Maps API to display a map of restaurants in San Francisco, CA neighborhood. The markers display the street view image, location.",
            "year": "July 2017"

        },
        {
            "name": "Linux Server Configuration",
            "shortName": "linux",
            "description": "Installed Linux server and host my web applications. Secured my server from a number of attack vectors, installed and configured a database server, and deployed Item-Catalog web applications onto it.",
            "year": "September 2017"

        },
        {
            "name": "build Portfolio Project ",
            "shortName": "portfolio",
            "description": "Developed a responsive website that displays images, descriptions and links to each of the portfolio projects I have completed throughout the course of my Udacity program.",
            "year": "Feb 2017"

        },
        {
            "name": "Movie project ",
            "shortName": "movie",
            "description": "Created a data structure movie.py -- a Python  Class to store my favorite movies included movie title, poster URL and a YouTube link to the movie trailer. It generates a static web page allowing visitors to browse their movies and watch the trailers.",
            "year": "Jan 2017"

            }
  ]



