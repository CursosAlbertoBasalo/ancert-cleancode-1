// !️ Interface Segregation Principle, avoid implementing unnecessary methods

class ActivitiesFull {
	addNew() {}
	remove() {}
	cancel() {}
	confirm() {}
	enrollParticipant() {}
	removeParticipant() {}
	finish() {}
}

class App {
	main() {
		const activities: ActivitiesFull = new ActivitiesFull();
		// !️ The App class is forced to import (depend on) all methods of the Activities class
		// !️ But it only needs to use a few of them
		this.enrollParticipant(activities);
	}
	enrollParticipant(activities: ActivitiesFull) {
		activities.enrollParticipant();
	}
}

// * The Activities class can be split into multiple interfaces

interface ActivitiesRepository {
	addNew(): void;
	remove(): void;
}

interface ActivitiesManagement {
	cancel(): void;
	confirm(): void;
	finish(): void;
}

interface ActivitiesParticipation {
	enrollParticipant(): void;
	removeParticipant(): void;
}

class Activities
	implements ActivitiesRepository, ActivitiesManagement, ActivitiesParticipation
{
	addNew() {}
	remove() {}
	cancel() {}
	confirm() {}
	enrollParticipant() {}
	removeParticipant() {}
	finish() {}
}

class AppI {
	main() {
		// * While still using the Activities class,
		// the App class now depends on the ActivitiesParticipation interface
		// and could be injected with any class that implements it
		const activitiesParticipation: ActivitiesParticipation = new Activities();
		this.enrollParticipant(activitiesParticipation);
	}
	enrollParticipant(activities: ActivitiesParticipation) {
		activities.enrollParticipant();
	}
}
