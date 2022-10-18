class ProductsTransferJob < ApplicationJob
  queue_as :urgent

  def perform(*args)
    puts "Lets transfer Products"
  end
end
