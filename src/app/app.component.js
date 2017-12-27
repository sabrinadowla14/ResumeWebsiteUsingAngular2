"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var Skill = (function () {
    function Skill() {
    }
    return Skill;
}());
exports.Skill = Skill;
var AppComponent = (function () {
    function AppComponent() {
        this.appTitle = 'Welcome to my Resume Website!!';
        this.jobPosition = 'Software Engineer.';
        this.schoolTitle = 'Education:';
        this.projectTitle = 'List of Projects:';
        this.appSkill = 'Technical Skills:';
        this.projects = PROJECTS;
        this.currentProject = Project;
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
        ];
        this.skills = [
            {
                name: 'Angular'
            }, {
                name: 'JavaScript',
            },
            {
                name: 'Python',
            }, {
                name: 'HTML5',
            },
            {
                name: 'CSS3',
            },
            {
                name: 'PostgreSQL',
            }
        ];
    }
    AppComponent.prototype.showProject = function (item) {
        this.currentProject = item;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ["./css/app.css"]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
var PROJECTS = [
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
        "shortName": "Blog",
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
        "shortName": "Linux",
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
];
//# sourceMappingURL=app.component.js.map