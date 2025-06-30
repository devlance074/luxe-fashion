import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: number;
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Shipping', description: 'Delivery information' },
    { id: 2, name: 'Payment', description: 'Payment method' },
    { id: 3, name: 'Review', description: 'Order confirmation' },
  ];

  return (
    <div className="mb-8">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-center space-x-8">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: currentStep >= step.id ? '#0ea5e9' : '#e5e7eb',
                      borderColor: currentStep >= step.id ? '#0ea5e9' : '#d1d5db',
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      currentStep >= step.id
                        ? 'text-white'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{step.id}</span>
                    )}
                  </motion.div>
                </div>
                <div className="mt-2 text-center">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {step.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
              {stepIdx < steps.length - 1 && (
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep > step.id ? '#0ea5e9' : '#e5e7eb',
                  }}
                  className="ml-8 h-0.5 w-16 bg-gray-200 dark:bg-gray-700"
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default CheckoutSteps;