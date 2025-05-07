// ! SOLID - Liskov Substitution Principle, avoid derived classes to break the base class behavior
export class Activity {
	title = "";
	location = "";
}

export class Performance extends Activity {
	performer = "";
	quorum = 500;
	capacity = 1000;
	editions: unknown[] = [];
}

export class Course extends Activity {
	performer: "";
	quorum = 0;
	capacity = 50;
	date: Date = new Date();
}

export class Excursion extends Activity {
	quorum = 10;
	capacity = 20;
	date: Date = new Date();
	transport: "";
}

export class FootballGame extends Activity {
	date: Date = new Date();
}

// ✅

export class ActivityLocation {}

export class ActivityTiming {}

export class ActivityPerformer {}

export class ActivityEditions {}

export class ActivityParticipationRange {}

export class ActivityTransport {}

export class PerformanceL {
	auditorium: ActivityLocation = new ActivityLocation();
	timing: ActivityTiming = new ActivityTiming();
	artist: ActivityPerformer = new ActivityPerformer();
	participationRange: ActivityParticipationRange =
		new ActivityParticipationRange();
	editions: ActivityEditions = new ActivityEditions();
}

export class CourseL {
	classroom: ActivityLocation = new ActivityLocation();
	timing: ActivityTiming = new ActivityTiming();
	teeacher: ActivityPerformer = new ActivityPerformer();
	participationRange: ActivityParticipationRange =
		new ActivityParticipationRange();
}

export class ExcursionL {
	location: ActivityLocation = new ActivityLocation();
	timing: ActivityTiming = new ActivityTiming();
	participationRange: ActivityParticipationRange =
		new ActivityParticipationRange();
	transport: ActivityTransport = new ActivityTransport();
}

export class FootballGameL {
	location: ActivityLocation = new ActivityLocation();
	timing: ActivityTiming = new ActivityTiming();
}
