import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { TaskService } from '../../services/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-suggest',
  standalone: true,
  templateUrl: './task-suggestion.html',
  styleUrls: ['./task-suggestion.css'],
  imports: [CommonModule, FormsModule],
})
export class TaskSuggestComponent {
  isLoading = false;
  task = { description: '', difficulty: '' };
  result: any;

  constructor(private taskService: TaskService) {}

  async smartAssignTask() {
    this.isLoading = true;
    try {
      const response = await lastValueFrom(
        this.taskService.smartAssign(this.task)
      );
      this.result = response;

      if (response.totalTasks >= 5) {
        await Swal.fire({
          icon: 'warning',
          title: 'Limitation reached!',
          text: `Number of tasks reached the limit (${response.totalTasks}). Suggesting another developer...`,
          confirmButtonColor: '#d33',
        });

        await this.smartAssignTask();
        return;
      }

      if (response.recommendedDeveloper) {
        await Swal.fire({
          icon: 'info',
          title: 'AI Suggestion',
          text: `Suggested: ${response.recommendedDeveloper.name} (Score: ${response.recommendedDeveloper.score})`,
          confirmButtonColor: '#3c926e',
        });
      } else {
        await Swal.fire({
          icon: 'warning',
          title: response.message || 'No developer suggested',
        });
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong.',
      });
    } finally {
      this.isLoading = false;
    }
  }
}
