export class CreateSubscriptionDto {
  id: string;
  label: string;
  pageUrl: string;
  selector: string;
  schedule: SubscriptionSchedule;
  lastChecked: string;
  metadata: SubscriptionMetadata;
}

class SubscriptionSchedule {
  cron: string;
  timeZone: string;
  options: ScheduleOptions;
}

class ScheduleOptions {
  repeatEvery: string;
  daysOfWeek: string[];
  exceptions: string[];
}

class SubscriptionMetadata {
  changeId: string;
  subscriptionId: string;
  lastChangeDetected: string;
  oldContent: string;
  newContent: string;
}
