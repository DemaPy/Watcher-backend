import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  subscriptions: CreateSubscriptionDto[] = [
    {
      id: '1',
      label: 'Track price',
      selector: "[data-testid='prices-wrapper']",
      lastChecked: '2025-01-31T09:00:00Z',
      metadata: {
        changeId: '',
        lastChangeDetected: '',
        newContent: '85 zł',
        oldContent: '8 500 zł',
        subscriptionId: '',
      },
      pageUrl: '',
      schedule: {
        cron: '0 9 * * *',
        timeZone: 'UTC',
        options: {
          repeatEvery: 'daily',
          daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          exceptions: ['2025-01-01'],
        },
      },
    },
  ];

  create(createSubscriptionDto: CreateSubscriptionDto) {
    this.subscriptions.push(createSubscriptionDto);
    return {
      ...createSubscriptionDto,
      metadata: {
        ...createSubscriptionDto.metadata,
        newContent: '85 zł',
      },
    };
  }

  findAll() {
    return this.subscriptions;
  }

  findOne(id: string) {
    return this.subscriptions.find((item) => item.id === id);
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: string) {
    return `This action removes a #${id} subscription`;
  }
}
