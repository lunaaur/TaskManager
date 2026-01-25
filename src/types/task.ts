enum TaskPriorityEnum  {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low',
}

export interface ITaskState {
    id: number;
    name: string;
    user_id: number;
    reminded: boolean;
    priority: TaskPriorityEnum;
    description?: string;
    subtask_id: number | null;
    completed: boolean;
    created_at: Date;
    modified_at: Date;
    subtasks_count: number;
    completed_subtasks: number;
    }

export interface ITaskApiResponse {
  success: boolean;
  count: number;
  tasks: ITaskState[];
}